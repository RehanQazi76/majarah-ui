import { type SchemaTypeDefinition } from 'sanity'
import contactForm from './contactForm'
import contactFormIndividual from './contactFormIndividual'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contactForm,
    contactFormIndividual
  ],
}
