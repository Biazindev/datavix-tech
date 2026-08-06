import { berionIgrejas } from './berion-igrejas'
import { appMembros } from './app-membros'
import { conexaoJovem } from './conexao-jovem'
import { berionComercios } from './berion-comercios'
import type { ProductContent } from './types'

export type { ProductContent, ProductFeature, ProductStat } from './types'
export { berionIgrejas, appMembros, conexaoJovem, berionComercios }

export const products: ProductContent[] = [berionIgrejas, appMembros, conexaoJovem, berionComercios]
