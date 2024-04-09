import React from 'react'
import { Link } from 'react-router-dom'
import CollectionCard from '../card/CollectionCard'
import { Layout, PrivateLayout } from '../Layouts'

const CollectionsPage = () => {
    return (
        <Layout title='Collections'>
            <CollectionCard />

        </Layout>
    )
}

export default CollectionsPage