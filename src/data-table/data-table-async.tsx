import { UseQueryResult } from '@tanstack/react-query'
import { Column } from '../table'
import { DataTable } from './data-table'
import { PaginationProps } from '../pagination'

type DataTableAsyncProps = {
  columns: Column[],
  query: UseQueryResult<any, Error>
  onChangePagination: PaginationProps['onChange']
  title?: string,
}

export const DataTableAsync = ({ query, columns, onChangePagination }: DataTableAsyncProps) => {
  const { data: response, isPending, isFetching, refetch } = query


  return (
    <DataTable
      isLoading={isPending || isFetching}
      columns={columns}
      rows={response?.data}
      current={response?.page}
      total={response?.total}
      perPage={response?.perPage}
      onChange={(p) => {
        if (onChangePagination) {
          onChangePagination(p)
        }
        refetch()
      }}
    />
  )
}
