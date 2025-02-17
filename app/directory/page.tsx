import DirectoryBox from "./DirectoryBox"

export const metadata = {
    title: 'Directory',
}

export default function Directory() {
    return (
        <>
            <h1>Directory</h1><br />
            <div className="directoryBoxHolder">
                <DirectoryBox title="Games" description="All of the released games I've made." link="/directory/games"
                items={[
                    'Reverie Memory', 
                    'Snakerosion',
                    'Tetraduel',
                    'Tragedy!_',
                    'Cozy Potion Evolution',
                    'Mycelium Melody',
                    'Space To Repair',
                    'Flower Tower',
                    "Breaking Partner's Dates",
                    'Espionage Office',
                    'Mini Necro',
                    'Zephyrinth',
                ]}/>
                <DirectoryBox title="Code Examples" description="Snapshots of my programming." link="/directory/code"
                items={[
                    'Programming Language'
                ]}/>
                <DirectoryBox title="Websites" description="My websites." link="https://boop.website"
                items={[
                    'boop.website',
                    'boop.cool',
                    'boop.pink',
                    'tilde.town/~boop'
                ]}/>
            </div>
        </>
    )
}