import { ReactElement } from 'react'
import { FiltersState } from '../../../../types/filterProps'

type Props = {
    value: string
    keyName: keyof FiltersState
    icon: ReactElement
}
export type { Props }
