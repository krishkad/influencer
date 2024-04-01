"use client"
import React, { useState } from 'react'
import { audienceAgeGroups, audienceIncomeLevels, audienceOccupations, dummyProfile, engagementRates, followerCounts, genders, influencerCategories, influencerLocations } from '@/constants/index.c';
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
                <div className="w-full flex flex-col gap-7">
                    <div className="mt-6 space-y-1">
                        <h2 className="text-xl font-semibold tracking-tight">
                            Tell us more
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            What kind of influencer you want.
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-10">
                        <CheckSelect multiSelect={false} data={influencerCategories} title='Category' />
                        <RadioSelect data={followerCounts} title='Followers' />
                        <CheckSelect multiSelect={false} data={influencerLocations} title='Location' />
                        <CheckSelect multiSelect={true} data={genders} title='Gender' />
                        <RadioSelect grid={3} data={engagementRates} title='Average Engagement' />
                        <CheckSelect multiSelect={false} data={audienceIncomeLevels} title='Audience Income Level' />
                        <RadioSelect data={audienceAgeGroups} title='Audience Age Group' />
                        <CheckSelect multiSelect={true} data={audienceOccupations} title='Audience Occupations' />
                    </div>
                    <div className="w-full">
                        <Button className='w-full h-14 font-semibold text-white'>
                            {true ? "Find Influencer" : "Finding..."}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 mt-20">
                    {dummyProfile.map((item, i) => {
                        return <ProfileCard imgUrl={item.imgUrl} username={item.username} followers={item.followers} following={item.following} creatorTitle={item.creatorTitle} posts={item.posts} name={item.name} bio={item.bio} key={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default FindInfluencerContainer