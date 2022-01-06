import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1>
	<Container>
		<Row>
		<Column>
			
			
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
