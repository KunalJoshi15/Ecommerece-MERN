import React from 'react'
import { Hemlet } from 'react-helmet'
const Meta = ({title,description,keywords}) => {
    return (
        <Hemlet>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keyword' content={keywords}/>
        </Hemlet>
    )
}

Meta.defaultProps = {
    title:'Welcome To ProShop',
    keywords: 'electronics, buy electronics, cheap electronics.'
}

export default Meta
