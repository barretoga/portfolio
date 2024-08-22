import { useAxios } from '@vueuse/integrations/useAxios'
import type { UrlParams } from '@vueuse/core'
import { http } from '~/composables/http'
import { notify } from '~/utils/notify'

const axiosOptions = function<T> (
  showToast = false,
  callback?: (response: T) => T,
) {
  return {
    immediate: false,
    onSuccess: (res: any) => {
      callback?.(res)
      if (showToast) {
        notify(
          res?.data?.message
            ? res.data.message
            : 'Operação concluída com sucesso',
          'success',
        )
      }
    },
    onError(e: any) {
      notify(
        e.response?.data.message
          ? e.response.data.message
          : 'Não foi possível concluir a operação',
        'error',
      )
    },
  }
}

export function useGet<T>(
  url: string,
  callback?: (response: T) => T,
  showToast = true,
) {
  const response = useAxios(
    url,
    { method: 'GET' },
    http,
    axiosOptions<T>(showToast, callback),
  )

  function execute(params?: UrlParams) {
    response.execute({ params }).then()
  }

  return { ...response, execute }
}
