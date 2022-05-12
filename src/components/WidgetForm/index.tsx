import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import otherImageUrl from '../../assets/other.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    PROBLEMA: {
        title: 'PROBLEMA',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEIA: {
        title: 'IDEIA',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OUTRO: {
        title: 'OUTRO',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },   
    },
};

export type FeedbackType = keyof typeof feedbackTypes;


// Object.entries(feedbackTypes) =>  /* retorna um array */

// [                                array de arrays
//     ['BUG', {...}],              2 indices. chave do objeto e conteudo do objeto.
//     ['IDEA',{...}],
//     ['OTHER',{...}],
// ]


export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null);
    }
    return (
        
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                
            ) : (
                <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Desenvolvido por <a className="underline underline-offset-2" href="https://instagram.com.br/lkisaki">Luan Kisaki</a>
            </footer>
        </div>
    );
}