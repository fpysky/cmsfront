import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken, getRefreshToken, setRefreshToken, removeRefreshToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    refreshToken:getRefreshToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_REFRESH_TOKEN: (state, token) => {
      state.refreshToken = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) { 
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo).then(response => {
          let token = response.data.access_token
          let refresh_token = response.data.refresh_token
          commit('SET_TOKEN', token)
          commit('SET_REFRESH_TOKEN', refresh_token)
          setToken(token)
          setRefreshToken(refresh_token)
          resolve() 
          getUserInfo().then(response => {
            if (!response.data) {
              reject('error')
            }
            const data = response.data
            commit('SET_NAME', data.user.name)
            commit('SET_STATUS', true)
            // commit('SET_AVATAR', data.user.avatar)
            // commit('SET_INTRODUCTION', data.user.introduction)
            // console.log(data)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data

          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          //   commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }

          commit('SET_NAME', data.user.name)
          commit('SET_AVATAR', data.user.avatar)
          // commit('SET_INTRODUCTION', data.user.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //第三方验证登录
    LoginByThirdparty({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', data.accessToken)
        setToken(data.accessToken)
        resolve()
        // commit('SET_CODE', code)
        // loginByThirdparty(state.status, state.email, state.code).then(response => {
        //   commit('SET_TOKEN', response.data.token)
        //   setToken(response.data.token)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          // commit('SET_ROLES', [])
          commit('SET_REFRESH_TOKEN', '')
          removeToken()
          removeRefreshToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user