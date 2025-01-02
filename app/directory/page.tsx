import DirectoryBox from "./DirectoryBox"

export const metadata = {
    title: 'Directory',
}

export default function Directory() {
    return (
        <>
            <h1>Directory</h1><br />
            <DirectoryBox title="Games" description="All of the released games I've made." link="/directory/games"
            items={[
                'Tragedy!_',
                'Reverie Memory', 
                'Snakerosion',
                'Space To Repair',
                "Breaking Partner's Dates",
                'Espionage Office',
                'Flower Tower',
                'Cozy Potion Evolution',
                'Mycelium Melody',
                'Mini Necro',
                'Zephyrinth',
                ]}/>
        </>
    )
}