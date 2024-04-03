"use client"
import React, { useState } from 'react'
import { AverageReach, audienceAgeGroups, audienceIncomeLevels, audienceOccupations, dummyProfile, engagementRates, followerCounts, genders, influencerCategories, influencerLocations } from '@/constants/index.c';
import { Button } from '../ui/button';
import Platform from './Platform';
import CheckSelect from './CheckSelet';
import RadioSelect from './RadioSelect';
import ProfileCard from './ProfileCard';

const FindInfluencerContainer = () => {
    const [filters, setFilters] = useState<filterTypes>({ platform: "", category: "", followerCounts: "", location: "", gender: "", engagementRate: "", incomeLevel: "", ageGroup: "", occupation: "" });


    const handleFilters = (e: any) => {
        e.preventDefault();
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }


    return (
        <div className='w-full'>
            <div className="w-full">
                <Platform handleFilters={handleFilters} />
                <div className="w-full flex flex-col gap-7 mt-5">
                    <div className="w-full flex flex-col gap-10">
                        <CheckSelect multiSelect={false} data={influencerCategories} title='Category' description='Select Category of Influencer.' />
                        <RadioSelect data={followerCounts} title='Followers' description='Select minimux to maximun number of followers.' />
                        <RadioSelect data={AverageReach} title='Reach' description='Select minimum and maximun number of reach you expect' />
                        <CheckSelect multiSelect={false} data={influencerLocations} title='Location' description='In Which country your finding your Influencer' />
                        <CheckSelect multiSelect={true} data={genders} title='Gender' description='Select Gender of the Influencer.' />
                        <RadioSelect grid={3} data={engagementRates} title='Average Engagement' description='Average Engagement Rate of the influencer' />
                        <CheckSelect multiSelect={false} data={audienceIncomeLevels} title='Audience Income Level' description='Audience Income Level you want to reach.' />
                        <RadioSelect data={audienceAgeGroups} title='Audience Age Group' description='Audience age group. Only for specific targeting' />
                        <CheckSelect multiSelect={true} data={audienceOccupations} title='Audience Occupations' description='Audience occupation to traget specifically' />
                    </div>
                    <div className="w-full">
                        <Button className='w-full h-14 font-semibold text-white'>
                            {true ? "Find Influencer" : "Finding..."}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col gap-10 mt-20">
                    <div className="w-full">
                        <h1 className='text-2xl font-bold'>Profiles we Find</h1>
                        <span className="text-sm font-medium text-muted-foreground">
                            Most relavant Influencer profiles 
                        </span>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {dummyProfile.map((item, i) => {
                            return <ProfileCard imgUrl={item.imgUrl} averageViews={item.averageViews} username={item.username} followers={item.followers} following={item.following} creatorTitle={item.creatorTitle} posts={item.posts} name={item.name} bio={item.bio} averageEngagement={item.averageEngagement} key={i} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindInfluencerContainer