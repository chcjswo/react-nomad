import React from "react";
import styled from "styled-components";

const List = styled.ul`
	display: flex;
	&:hover {
		background-color: blue;
	}
`;

export default () => (
	<header className="nav">
		<List>
			<li>
				<a href="/">Movies</a>
			</li>
			<li>
				<a href="/tv">Tv</a>
			</li>
			<li>
				<a href="/search">Search</a>
			</li>
		</List>
	</header>
);
