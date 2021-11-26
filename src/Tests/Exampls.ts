
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<BuildingsType>
    citizensNumber: number
}
type HousesType = {
    id: number
    buildeAt: number
    repaired: boolean
    address: AddressType
}
type AddressType = {
    number: number
    street: StreetType
}
type StreetType = {
    title: string
}
type BuildingsType = {
    type: string
    address: BuildingsAddressType
    budget: number
    staffCount: number
}
type BuildingsAddressType = {
    street: StreetType
    number: number
}


export const city = {
    title: 'New York',
    houses: [
        {
            id: 1, buildeAt: 2012, repaired: false,
            address: {
                number: 100,
                street: { title: 'White street' }
            }
        },
        {
            id: 2, buildeAt: 2000, repaired: false,
            address: {
                number: 100,
                street: { title: 'Happy street' }
            }
        },
        {
            id: 3, buildeAt: 2020, repaired: false,
            address: {
                number: 101,
                street: { title: 'Happy street' }
            }
        }
    ],
    governmentBuildings: [
        {
            type: 'HOSPITAL',
            address: { street: { title: 'Central Str' }, number: 12 },
            budget: 200000, staffCount: 200
        },
        {
            type: 'FIRE-STATION',
            address: { street: { title: 'South Str' }, number: 12 },
            budget: 500000, staffCount: 1000
        }
    ],
    citizensNumber: 1000000
}