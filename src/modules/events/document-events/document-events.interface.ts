import { Prisma } from '@prisma/client'

export interface DocumentCreatedEvent {
  id: string
  name: string
  is_active: boolean
  url: string
  description: string
  tags: string[]
  topic_id: string
  size: Prisma.Decimal
}
export enum DOCUMENT_EVENTS {
  ON_DOCUMENT_CREATED = 'documents.created',
}
