import { ReactElement } from 'react'
import { FiltersTypes } from '../../../../types/filterTypes'

type Props = {
    value: string
    keyName: keyof FiltersTypes
    icon: ReactElement
}
export type { Props }
