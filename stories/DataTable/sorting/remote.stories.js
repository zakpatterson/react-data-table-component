import React, { useState } from 'react';
import doc from './remote.mdx';
import { orderBy } from 'lodash';
import initData from '../../constants/sampleMovieData';
import DataTable from '../../../src/index';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
		sortable: true,
	},
	{
		name: 'Director',
		selector: row => row.director,
		sortable: true,
	},
	{
		name: 'Year',
		selector: row => row.year,
		sortable: true,
	},
];

export function RemoteSort() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(initData);

	const handleSort = (column, sortDirection) => {
		// simulate server sort
		console.log(column);
		setLoading(true);

		// instead of setTimeout this is where you would handle your API call.
		setTimeout(() => {
			setData(orderBy(data, column.selector, sortDirection));
			setLoading(false);
		}, 100);
	};

	return (
		<DataTable
			title="Movie List"
			columns={columns}
			data={data}
			onSort={handleSort}
			sortServer
			progressPending={loading}
			persistTableHead
			pagination
		/>
	);
}

export default {
	title: 'Sorting/Remote Sort',
	component: RemoteSort,
	parameters: {
		docs: {
			page: doc,
		},
	},
};