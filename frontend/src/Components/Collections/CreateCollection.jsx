import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CollectionCard from '../card/CollectionCard';
import CollectionFormModal from '../CollectionFormModal'
import { PrivateLayout } from '../Layouts';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CreateCollection() {
    const [collectionFormPopupOpen, setCollectionFormPopupOpen] = useState(true);


    return (
        <PrivateLayout title='Create Collection'>
            <Grid>
                <Button className='create_collection_btn' startIcon={<AddIcon />} onClick={() => setCollectionFormPopupOpen(true)}>Craete new</Button>
            </Grid>
            <CollectionCard />
            <CollectionFormModal useOpen={() => [collectionFormPopupOpen, setCollectionFormPopupOpen]} />
        </PrivateLayout >
    )
}
