"use client"
import React, { useState } from 'react'
import { audienceAgeGroups, audienceIncomeLevels, audienceOccupations, engagementRates, followerCounts, genders, influencerCategories, influencerLocations } from '@/constants/index.c';
import { Button } from '../ui/button';
import Platform from './Platform';
import CheckSelect from './CheckSelet';

const FindInfluencerContainer = () => {
    const [filters, setFilters] = useState<filterTypes>({ platform: "", category: "", followerCounts: "", location: "", gender: "", engagementRate: "", incomeLevel: "", ageGroup: "", occupation: "" });


    const handleFilters = (e: any) => {
        e.preventDefault();
        setFilters({ ...filters, [e.target.name]: e.target.value })
    }


    return (
        <div className='w-full'>
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
                    <CheckSelect multiSelect={false} data={followerCounts} title='Followers' />
                    <CheckSelect multiSelect={false} data={influencerLocations} title='Location' />
                    <CheckSelect multiSelect={true} data={genders} title='Gender' />
                    <CheckSelect multiSelect={false} data={engagementRates} title='Average Engagement' />
                    <CheckSelect multiSelect={false} data={audienceIncomeLevels} title='Audience Income Level' />
                    <CheckSelect multiSelect={false} data={audienceAgeGroups} title='Audience Age Group' />
                    <CheckSelect multiSelect={true} data={audienceOccupations} title='Audience Occupations' />
                </div>
                <div className="w-full">
                    <Button className='w-full h-14 font-semibold text-white'>
                        {true ? "Find Influencer" : "Finding..."}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FindInfluencerContainer