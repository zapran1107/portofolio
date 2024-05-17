
export default function Blog(){
    return (
        <main>
            <h1>Ini adalah halaman blog</h1>
            <br />
            <hr/>
            <ul>
                {BLOCKED_PAGES.map((blog, i) => (
                    <li key={i} style={{
                        
                    }}>
                        <h2>{blog.title}</h2>
                        <h2>{blog.content}</h2>
                    </li>
                ))}
            </ul>
        </main>
    )
}

const BLOCKED_PAGES = [
    {
        title: 'Blog 1',
        Date: '2023-01-01',
        content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum'
    },

    {
        title: 'Blog 2',
        Date: '2023-01-01',
        content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum'
    },
    {
        title: 'Blog 3',
        Date: '2023-01-01',
        content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum'
    }
]