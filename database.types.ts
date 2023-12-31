export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      houseplants: {
        Row: {
          category: string | null
          climate: string | null
          common: string | null
          cover_img: string | null
          diseases: string | null
          family: string | null
          id: number
          ideallight: string | null
          insects: string | null
          latin: string | null
          light_level: number | null
          origin: string | null
          pet_friendly: boolean | null
          tempmax: number | null
          tempmin: number | null
          toleratedlight: string | null
          use: string | null
          watering: string | null
          watering_frequency: number | null
        }
        Insert: {
          category?: string | null
          climate?: string | null
          common?: string | null
          cover_img?: string | null
          diseases?: string | null
          family?: string | null
          id: number
          ideallight?: string | null
          insects?: string | null
          latin?: string | null
          light_level?: number | null
          origin?: string | null
          pet_friendly?: boolean | null
          tempmax?: number | null
          tempmin?: number | null
          toleratedlight?: string | null
          use?: string | null
          watering?: string | null
          watering_frequency?: number | null
        }
        Update: {
          category?: string | null
          climate?: string | null
          common?: string | null
          cover_img?: string | null
          diseases?: string | null
          family?: string | null
          id?: number
          ideallight?: string | null
          insects?: string | null
          latin?: string | null
          light_level?: number | null
          origin?: string | null
          pet_friendly?: boolean | null
          tempmax?: number | null
          tempmin?: number | null
          toleratedlight?: string | null
          use?: string | null
          watering?: string | null
          watering_frequency?: number | null
        }
        Relationships: []
      }
      plants: {
        Row: {
          created_at: string
          experience: number | null
          id: number
          image_url: string | null
          light_level: number | null
          name: string | null
          pet_friendly: boolean | null
          water_frequency: number | null
        }
        Insert: {
          created_at?: string
          experience?: number | null
          id?: number
          image_url?: string | null
          light_level?: number | null
          name?: string | null
          pet_friendly?: boolean | null
          water_frequency?: number | null
        }
        Update: {
          created_at?: string
          experience?: number | null
          id?: number
          image_url?: string | null
          light_level?: number | null
          name?: string | null
          pet_friendly?: boolean | null
          water_frequency?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
