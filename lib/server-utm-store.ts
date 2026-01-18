// Armazenamento temporário de UTMs no servidor
// Usado para persistir UTMs entre a criação do pedido e o webhook de pagamento

export interface StoredUtmParams {
  src?: string | null
  sck?: string | null
  utm_source?: string | null
  utm_campaign?: string | null
  utm_medium?: string | null
  utm_content?: string | null
  utm_term?: string | null
}

interface UtmStoreEntry {
  params: StoredUtmParams
  createdAt: number
}

// Map para armazenar UTMs por orderId
const utmStore = new Map<string, UtmStoreEntry>()

// Tempo de expiração: 1 hora (em milissegundos)
const EXPIRATION_TIME = 60 * 60 * 1000

// Salva os parâmetros UTM associados ao orderId
export function saveUtmParams(orderId: string, params: StoredUtmParams): void {
  utmStore.set(orderId, {
    params,
    createdAt: Date.now(),
  })
  console.log(`[UTM Store] Salvou UTMs para orderId: ${orderId}`, params)
}

// Recupera os parâmetros UTM pelo orderId
export function getUtmParams(orderId: string): StoredUtmParams | null {
  const entry = utmStore.get(orderId)

  if (!entry) {
    console.log(`[UTM Store] Nenhum UTM encontrado para orderId: ${orderId}`)
    return null
  }

  // Verifica se expirou
  if (Date.now() - entry.createdAt > EXPIRATION_TIME) {
    utmStore.delete(orderId)
    console.log(`[UTM Store] UTMs expirados para orderId: ${orderId}`)
    return null
  }

  console.log(`[UTM Store] Recuperou UTMs para orderId: ${orderId}`, entry.params)
  return entry.params
}

// Remove os UTMs após uso (opcional, para limpeza)
export function deleteUtmParams(orderId: string): void {
  utmStore.delete(orderId)
  console.log(`[UTM Store] Removeu UTMs para orderId: ${orderId}`)
}

// Limpeza automática de entradas expiradas (executa a cada 10 minutos)
setInterval(
  () => {
    const now = Date.now()
    let cleanedCount = 0

    for (const [orderId, entry] of utmStore.entries()) {
      if (now - entry.createdAt > EXPIRATION_TIME) {
        utmStore.delete(orderId)
        cleanedCount++
      }
    }

    if (cleanedCount > 0) {
      console.log(`[UTM Store] Limpeza automática: removeu ${cleanedCount} entradas expiradas`)
    }
  },
  10 * 60 * 1000,
) // 10 minutos
