import LeftCard from '@/components/EssentialPackage/LeftCard'
import LeftItems from '@/components/EssentialPackage/LeftItems'
import PxWrapper from '@/components/shares/PxWrapper'
import React from 'react'

const PackagePage = () => {
  return (
    <div className="bg-[#f0f9fe]">
      <PxWrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3">
            <LeftCard />
            <LeftItems />
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-8"></div>
        </div>
      </PxWrapper>
    </div>
  )
}

export default PackagePage

