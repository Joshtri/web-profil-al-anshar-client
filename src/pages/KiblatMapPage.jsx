import React from 'react'
import Layout from './Layout'
import KiblatDirectionLeaflet from '../components/Kiblat/KiblatMap'

function KiblatMapPage() {
  return (
    <Layout>
        <KiblatDirectionLeaflet/>
    </Layout>
    )
}

export default KiblatMapPage