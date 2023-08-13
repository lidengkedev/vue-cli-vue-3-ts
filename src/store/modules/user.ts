import { ActionContext, Module } from 'vuex'
import RootStateTypes from '../types/interface'
import UserModuleTypes from '../types/user.interface'

interface State {
  username: string
}

const state: State = {
  username: ''
}
const mutations = {
  SET_USERNAME(state: any, username: string) {
    state.username = username
  }
}
const actions = {
  username(store: any, data: string) {
    store.commit('SET_USERNAME', data)
  }
}

const user: Module<UserModuleTypes, RootStateTypes> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default user