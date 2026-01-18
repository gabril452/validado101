"use client"

import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"

export interface UtmParams {
  src: string | null
  sck: string | null
  utm_source: string | null
  utm_campaign: string | null
  utm_medium: string | null
  utm_content: string | null
  utm_term: string | null
}

const UTM_STORAGE_KEY = "cometa_utm_params"

export function getUtmParamsFromStorage(): UtmParams {
  const defaultParams: UtmParams = {
    src: null,
    sck: null,
    utm_source: null,
    utm_campaign: null,
    utm_medium: null,
    utm_content: null,
    utm_term: null,
  }

  if (typeof window === "undefined") return defaultParams

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY)
    if (stored) {
      return { ...defaultParams, ...JSON.parse(stored) }
    }
  } catch {
    // localStorage not available
  }

  return defaultParams
}

export function useUtmParams(): UtmParams {
  const searchParams = useSearchParams()
  const [utmParams, setUtmParams] = useState<UtmParams>(() => getUtmParamsFromStorage())
  const hasProcessed = useRef(false)

  useEffect(() => {
    if (hasProcessed.current) return

    // Try to get from URL first
    const urlParams: UtmParams = {
      src: searchParams.get("src"),
      sck: searchParams.get("sck"),
      utm_source: searchParams.get("utm_source"),
      utm_campaign: searchParams.get("utm_campaign"),
      utm_medium: searchParams.get("utm_medium"),
      utm_content: searchParams.get("utm_content"),
      utm_term: searchParams.get("utm_term"),
    }

    // Check if any URL param exists
    const hasUrlParams = Object.values(urlParams).some((v) => v !== null)

    if (hasUrlParams) {
      try {
        localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(urlParams))
      } catch {
        // localStorage not available
      }
      setUtmParams(urlParams)
    }

    hasProcessed.current = true
  }, [searchParams])

  return utmParams
}
