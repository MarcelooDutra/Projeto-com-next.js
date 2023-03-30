/*import Head from 'next/head';
import Link from '../src/components/link';*/

import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen;


export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response;
        });

    return{
        props: {
            qualquercoisa: 'opa opa',
            faq
        },
    }
}


/*export default function FaqPage({ faq }){
    console.log(faq)
    return(
        <div>
            <Head>
                <title>Faq: Alura-case</title>
            </Head>
            <h1>Alura-case: Faq page</h1>
            <Link href="/">
                Ir para a pagina Home.
            </Link>
            <div>
                <ul>
                    {faq.map(({answer, question}) => (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}*/