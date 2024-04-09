import React from 'react'
import { Route, Routes } from 'react-router-dom';

import ActivitiesPage from './Components/ActivitiesPage/ActivitiesPage';
import AnnouncementPage from './Components/Announcement/AnnouncementPage';
import AuctionPage from './Components/Auctions/AuctionPage';
import AuthorPage from './Components/Author/AuthorPage';
import BlogDetailsPage from './Components/BlogDetails/BlogDetailsPage';
import BlogPage from './Components/Blog/BlogPage';
import CategoryPage from './Components/Category/CategoryPage';
import CollectionDetailsPage from './Components/CollectionDetails/CollectionDetailsPage';
import CollectionsPage from './Components/Collections/CollectionsPage';
import CreateBlog from './Components/CreateBlog/CreateBlogPage.js';
import CreatePage from './Components/CreatePage/CreatePage';
import CreatorsPage from './Components/CreatorsPage/CreatorsPage';
import ExplorePage from './Components/Explore/ExplorePage';
import ItemDetailsPage from './Components/ItemDetailsPage/ItemDetailsPage';
import NotificationDetailPage from './Components/NotificationDetail/NotificationDetailPage';
// import NotificationsPage from './Notifications/NotificationsPage';
import PrivacyPage from './Components/PrivacyPage/PrivacyPage';
import ProfilePage from './Components/Profile/ProfilePage';
import RankingsPage from './Components/Rankings/RankingsPage';
import StudentsPage from './Components/Students/StudentsPage';
import WalletPage from './Components/Wallet/WalletPage';
import HomePage from './Components/HomePage/HomePage';
import ProfessionalsPage from './Components/ProfessionalsPage/ProfessionalsPage';

function BaseRoutes() {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/rankings' element={<RankingsPage />} />
            <Route path='/activities' element={<ActivitiesPage />} />
            <Route path='/auction' element={<AuctionPage />} />
            <Route path='/creators' element={<CreatorsPage />} />
            <Route path='/professionals' element={<ProfessionalsPage />} />

            <Route path='/students' element={<StudentsPage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/notification-detail' element={<NotificationDetailPage />} />

            <Route path='/category' element={<CategoryPage />} />
            <Route path='/itemDetails' element={<ItemDetailsPage />} />
            <Route path='/collections' element={<CollectionsPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/announcement' element={<AnnouncementPage />} />


            <Route path='/wallets' element={<WalletPage />} />
            <Route path='/author' element={<AuthorPage />} />
            <Route path='/collection-details' element={<CollectionDetailsPage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog-details' element={<BlogDetailsPage />} />
            <Route path='/create-blog' element={<CreateBlog />} />
        </Routes>
    )
}

export default BaseRoutes