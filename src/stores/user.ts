import { defineStore } from 'pinia'
import { useGet } from '~/composables/api'
import type { Repository } from '~/models/Github'

interface State {
  repositories: Array<Repository>
}

const useUserStore = defineStore('User', {
  state: (): State => ({
    repositories: []
  }),
  actions: {
    repositories() {
      return useGet('repos', this.afterFetchRepositories(), false)
    },
    afterFetchRepositories() {
      return (response: Array<Repository>) => {

        this.$state.repositories = response

        return response
      }
    }
  }
})

export { useUserStore }
