export interface DirectoryResult {
  success: boolean
  _dev: boolean
  data: Datum[]
  pages: number
  page: number
  prev: number | null
  next: number | null
  hasPrevPage: boolean
  hasNextPage: boolean
}

export interface Datum {
  created: number
  name: string
  status: Status
  venues: Venue[]
  quickType: QuickType
  cashback_decimal: number
  dv_name: string
  expires: null
  dv_cashback: string
  media: string
  dv_category: string
  raw_category: string
  dv_address: string
  dv_latlng: number[]
  price_level: number
  rating: number
  popularity: number
}

export enum QuickType {
  Recurring = 'recurring',
}

export enum Status {
  Active = 'active',
}

export interface Venue {
  _id: string
  name: string
  status: Status
  address?: Address
}

export interface Address {
  _id: string
  zipcode: string
  location: Location
}

export interface Location {
  type: string
  coordinates: number[]
}
