import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { SearchOutlined } from '@ant-design/icons'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

import { NFTs } from '../redux/mocked-data'
import { NFTData } from '../ts-generalTypes/InitialStateInterfaces'
import { ColoredIcon } from '../components/utils/Icon'
import Badge from '../components/utils/Badge'
import Star from '../components/utils/Star'

const SpreadsheetView: React.FC = () => {
  const start_and_end = (str: string) => {
    if (str.length > 14) {
      return (
        str.substring(0, 6) + '...' + str.substring(str.length - 4, str.length)
      )
    }
    return str
  }

  const ReadMore = ({ children }: { children: string }) => {
    const text = children
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore)
    }

    return (
      <p className="flex text-sm mb-0 w-full justify-between">
        <span className="w-[93%] py-3">
          {isReadMore ? text.slice(0, 55) + '...' : text}
        </span>
        <span
          className="cursor-pointer flex items-center font-bold w-[5%] ml-1"
          onClick={toggleReadMore}
        >
          {isReadMore ? (
            <HiChevronDown style={{ color: '#a04ef6' }} />
          ) : (
            <HiChevronUp style={{ color: '#a04ef6' }} />
          )}
        </span>
      </p>
    )
  }

  const columns: TableColumn<NFTData>[] = [
    {
      name: '',
      cell: () => <Star />,
      width: '10px',
    },
    {
      name: 'Project Title',
      cell: (row) => (
        <div className="flex items-center">
          <span className="font-bold">{row.title}</span>
        </div>
      ),
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Price',
      cell: (row) => (
        <div className="flex flex-col">
          <div className="flex">
            <span className="font-bold mr-1">WL:</span>
            <span>{row.wlPrice}</span>
          </div>
          <div className="flex">
            <span className="font-bold mr-1">Public:</span>
            <span>{row.publicPrice}</span>
          </div>
        </div>
      ),
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Type',
      cell: (row) => <Badge label={row.type} color={row.color} />,
      maxWidth: '150px',
    },
    {
      name: 'Wallet',
      cell: (row) => <span>{start_and_end(row.wallet)}</span>,
      maxWidth: '200px',
    },
    {
      name: 'Social Media',
      cell: (row) => (
        <div className="flex items-center justify-evenly flex-wrap">
          {row.socialMedia.map((item, index) => (
            <ColoredIcon key={index} icon={item} biggerSize={true} />
          ))}
        </div>
      ),
      maxWidth: '200px',
    },
    {
      name: 'Notes',
      cell: (row) => <ReadMore>{row.notes}</ReadMore>,
    },
  ]

  const customStyles = {
    rows: {
      style: {
        minHeight: '60px',
      },
    },
  }

  return (
    <div className="flex flex-col w-full h-[calc(100%-50px)]">
      <div className="my-8 flex justify-between">
        <button className="bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-white font-medium py-3 px-4 rounded-md mr-2 hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150">
          <span className="font-normal mr-2">+</span>
          Add Project
        </button>
        <button className="flex justify-center items-center w-[46px] h-[46px] rounded-lg bg-gradient-to-r from-[#a04ef6] to-[#f64ee5] text-white hover:shadow-[0px_6px_24px_-2px_rgba(0,0,0,0.3)] ease-in-out duration-150">
          <SearchOutlined />
        </button>
      </div>
      <DataTable
        className="data-table"
        fixedHeader={true}
        columns={columns}
        data={NFTs}
        pagination
        customStyles={customStyles}
      />
    </div>
  )
}

export default SpreadsheetView
