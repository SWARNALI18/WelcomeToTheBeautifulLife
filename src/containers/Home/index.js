import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallary = props => (
        <div className="gallaryPost" style={props.gallaryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src="https://us.123rf.com/450wm/anabaraulia/anabaraulia2004/anabaraulia200400058/143963800-the-words-let-s-start-in-old-wood-type-wooden-cubes-business-startup-concept-.jpg?ver=6"alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image => 
                            <SideImage 
                                height={props.sideImageHeight}
                                src="https://i.pinimg.com/736x/ab/67/0d/ab670da7d68e74fe119554e71910276b.jpg"
                                alt="" />
                        )
                    }
                </section>
        </div>
);

const Home  = props => {
    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
   const sideImageHeight = gallaryHeight ;
   const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>
            <Card>
                <ImageGallary 
                            largeWidth="70%"
                            smallWidth="30%"
                            sideImageHeight={sideImageHeight}
                            gallaryStyle={gallaryStyle}
                            imagesArray={imgAr}
                        />
            </Card>
                <Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}

export default Home;