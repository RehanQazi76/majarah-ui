import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'o4eknloj',         // e.g. 'xyz123'
  dataset: 'production',                // or your dataset name
  apiVersion: '2023-07-19',             // use a fixed ISO date
  token: process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,  // From .env.local
  useCdn: false,
})
