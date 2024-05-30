import LeftCard from '@/components/EssentialPackage/LeftCard'
import PxWrapper from '@/components/shares/PxWrapper'
import React from 'react'

const PackagePage = () => {
  return (
    <PxWrapper>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3">
          <LeftCard />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-12 md:col-span-8"></div>
      </div>

    </PxWrapper>
  )
}

export default PackagePage

