import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';

const DeptOfIndustriesAndCommerce = () => {
    return ( 
        <Container>
            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="../about">About</Breadcrumb.Item>
                <Breadcrumb.Item active>Department of Industries And Commerce</Breadcrumb.Item>
            </Breadcrumb>
            <p>The Department of Industries and Commerce acts as a catalyst for the overall development of the industrial sector through effective discharge of developmental and facilitation roles. With a view to promote investment and trade, the Department formulates and implements the Policies of the State, Identification of Sectoral Advantages of the State and Human resource development for sustainable and growth-oriented industrialization has been a crucial role of the Department. Facilitating the take-off of infrastructure projects that boost the industrial growth has also been the Department’s forte. The Department helps enhance the competitiveness of domestic industry through modernization, technologyupgradation and adoption of best practices. It also provides a forum for entrepreneurs and industrialists through their associations to represent their needs to the Government, which translates into Policies of the State.</p>
            <p>Some of the crucial infrastructure projects facilitated by the Department include Growth Centers across the State, Export Promotion Industrial Parks, International Technology Park Ltd., Electronic city, Food and Agro-technology parks, Agro Export zones, Special Economic Zones, Bengaluru International Airport, etc.</p>
            <p>The Department is able to reach out to the small businesses as well as Industrial Houses by a great degree of decentralization within the organizational structure. The Department functions through the Districts Industries Centers, various Boards &amp; Corporations and Special purpose vehicles. The implementation of Policies of the Government is done through various schemes and the implementation of these schemes is decentralized for faster delivery of services.</p>
            <p>The Department has established the Single Window Mechanism for faster, single point clearances to be given to projects seeking infrastructure facilities/incentives/concessions and help in establishing industries and businesses in Karnataka.  Karnataka Udyog Mitra is the nodal agency under the Single window set up.</p>
            <p>There are several Self-employment generation schemes formulated by the State and Central Governments from time to time and are being implemented.</p>
        </Container>
    );
}
 
export default DeptOfIndustriesAndCommerce;