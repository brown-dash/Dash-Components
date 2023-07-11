import * as React from 'react'
import { IGlobalProps } from '../../global'

export interface ITemplateProps extends IGlobalProps {

}

export const Template = (props: ITemplateProps) => {
    return <div className={`template-container`}>
        Template Component
    </div>
}