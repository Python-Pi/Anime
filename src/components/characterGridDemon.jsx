import React from "react";
import GridItem from "./charGridItem";

function CharGrid(data){

    // Descriptions
    const tanjiroDes = `Tanjiro is the heart and soul of the Demon Slayer Corps. With a gentle demeanor and a determination forged from tragedy, he is the protagonist of the tale. Tanjiro's striking scarlet hair is a reflection of his fiery resolve to avenge his family, who fell victim to demons. Armed with a keen sense of smell and a potent sword, he transforms from a humble boy to a formidable demon slayer, driven by love and justice.`;
    const nezukoDes = `Tanjiro's sister, Nezuko, is a central figure in the story. After a demonic transformation, she becomes a unique and powerful force against the demons. Despite her predicament, Nezuko retains her humanity and exhibits a protective instinct towards her brother. Her demon abilities, coupled with her unwavering bond with Tanjiro, make her a symbol of hope and resilience in the fight against the demonic forces.`;
    const zenistuDes = `Zenitsu is a lightning-fast warrior with a timid disposition. Despite his fears of demons, he becomes a skilled demon slayer, showcasing incredible speed and agility. His defining moment comes when he enters a trance-like state during battles, demonstrating his true prowess. Beneath his anxious exterior, Zenitsu's loyalty and courage shine through, making him an endearing and surprisingly powerful ally.`;
    const inosukeDes = `Inosuke is a wild and boisterous warrior with a primal fighting style. Known for his distinctive boar's head mask and dual-wielding blades, Inosuke charges into battle with unmatched ferocity. Despite his rough exterior, he possesses a unique charm and a fierce loyalty to his comrades. Inosuke's untamed spirit and combat skills make him a formidable force on the front lines of the Demon Slayer Corps.`;
    const muzanDes = `Muzan stands as the ultimate antagonist, the progenitor of demons. Veiled in an air of malevolence, he orchestrates chaos and despair with cunning and ruthlessness. Possessing the ability to blend seamlessly into human society, Muzan is a constant threat to the demon slayers. His presence looms large, driving the narrative with an ever-present sense of danger and an ominous aura that challenges the very fabric of the demon slayer world.`;

    

    return(
        <div className="char-info">
            <h1>Character Info</h1>
            <GridItem name ='Tanjiro Kamado' des = {tanjiroDes} 
            img1={data.T1}
            img2={data.T2} 
            img3={data.T3} 
            img4={data.T4} 
            img5={data.T5} 
            img6={data.T6} 
            />
            <GridItem name = 'Nezuko Kamado' des = {nezukoDes}
            img1={data.N1}
            img2={data.N2} 
            img3={data.N3} 
            img4={data.N4} 
            img5={data.N5} 
            img6={data.N6} 
             />
            <GridItem name = 'Zenitsu Agatsuma' des={zenistuDes}
            img1={data.Z1}
            img2={data.Z2} 
            img3={data.Z3} 
            img4={data.Z4} 
            img5={data.Z5} 
            img6={data.Z6} 
            />
            <GridItem name = 'Inosuke Hashibira' des ={inosukeDes}
            img1={data.I1}
            img2={data.I2} 
            img3={data.I3} 
            img4={data.I4} 
            img5={data.I5} 
            img6={data.I6} 
            />
            <GridItem name = 'Muzan Kibutsuji' des={muzanDes}
            img1={data.M1}
            img2={data.M2} 
            img3={data.M2} 
            img4={data.M4} 
            img5={data.M5} 
            img6={data.M6} 
            />
        </div>
    );
};

export default CharGrid;