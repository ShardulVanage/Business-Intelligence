/* This example requires Tailwind CSS v3.0+ */
import { Disclosure, } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, } from '@heroicons/react/24/outline'


export default function Sylabus() {
    const faqs = [

        {
            "question": "Introduction to Power BI",
            "answer": ['Course Resources',
                'Welcome to the Course!!',
                'Introduction to Power BI']
        },
        {
            "question": "Power BI Basics",
            "answer": ['Life Hack: How to have Power BI Pro License',
                ' Power BI Desktop',
                'Power BI Services']
        },
        {
            "question": "Power Query Editor",
            "answer": ['What is Power Query Editor',
                '  Data Profiling Tools',
                '  Group by Dialog',
                'Applied Steps',
                ' Appending vs Merging']
        },
        {
            "question": "Visuals in Power BI",
            "answer": ["Different Visuals in Power BI"]
        },
        {
            "question": "Charts in Power BI",
            "answer": ["Different Charts in Power BI"]
        },
        {
            "question": "Data Analysis Expressions (DAX)",
            "answer": ["Introduction to DAX",
                "Implicit Measures",
                "DAX Formula",
                "Basic DAX functions",
                "Date functions",
                "CALENDAR functions",
                "Contexts: Row vs Filter",
                "Calculate & Filter",
                "IF ELSE functions",
                "Time Intelligence Functions",
                "X vs Non X functions"]
        },
        {
            "question": "Tool Tips & Drill Throughs",
            "answer": ["Tool Tips &amp; Drill Throughs"]
        },
        {
            "question": "Power BI Relationships",
            "answer": [" Relations in Power BI"]
        },
        {
            "question": "What are KPIs",
            "answer": ["Power BI KPIs"]
        },
        {
            "question": "Administration in Power BI",
            "answer": ["Administration in Power BI: Admin vs Member vs Contributor vs Viewer"]
        },
        {
            "question": "Security in Power BI",
            "answer": ["Security in Power BI: RLS"]
        },
        {
            "question": "Best Practices",
            "answer": ["Formatting Options in Power BI",
                " Best Practices in Power BI"]
        },
        {
            "question": "Exploratory Data Analysis (EDA)",
            "answer": ["What is EDA?"]
        },
        {
            "question": "Live Project Implementation",
            "answer": ["Live Project"]
        },


        {
            question: "Final Assignment",
            answer: [
                "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of   80% and above guarantees an internship opportunity from Zep or their partner companies"

            ],
        },
        // Add more FAQs here...
    ];
    const faqs2 = [
        {
            "question": "Welcome to the Course!!!",
            "answer": ["Introduction to Tableau",
                " Course Resources"]
        },
        {
            "question": "What is Data Visualization",
            "answer": ["What is Data Visualization"]
        },
        {
            "question": "BI Process",
            "answer": ["BI Process"]
        },

        {
            "question": "Tableau & It's Architecture",
            "answer": ["Features of Tableau",
                "  Tableau Vs Power BI",
                "Tableau Architecture",
                "  How to use Tableau"]
        },
        {
            "question": "Tableau Desktop",
            "answer": ["Tableau Desktop"]
        },
        {
            "question": "Relationships, Joins & Unions",
            "answer": ["Relationships, Joins & Unions"]
        },
        {
            "question": "Sets in Tableau",
            "answer": ["Sets in Tableau"]
        },
        {
            "question": "Groups in Tableau",
            "answer": ["Groups in Tableau"]
        },
        {
            "question": "Hierarchies in Tableau",
            "answer": ["Hierarchies in Tableau"]
        },
        {
            "question": "Filters in Tableau",
            "answer": ["Filters in Tableau"]
        },
        {
            "question": "Highlighting",
            "answer": ["Highlighting"]
        },
        {
            "question": "Device Designer",
            "answer": ["Device Designer"]
        },
        {
            "question": "Parameters",
            "answer": ["Parameters"]
        },
        {
            "question": "Data Blending & Mark Size",
            "answer": ["Data Blending & Mark Size"]
        },
        {
            "question": "Transparency",
            "answer": ["Transparency"]
        },
        {
            "question": "Date Aggregation",
            "answer": ["Date Aggregation"]
        },
        {
            "question": "Generated Fields",
            "answer": ["Generated Fields"]
        },
        {
            "question": "Discrete vs Continuous",
            "answer": ["Discrete vs Continuous"]
        },
        {
            "question": "Charts in Tableau",
            "answer": ["Discrete vs Continuous"]
        },
        {
            "question": "Pivot Tables in Tableau",
            "answer": ["Pivot Tables in Tableau"]
        },
        {
            "question": "LOD Expressions",
            "answer": ["LOD Expression"]
        },
        {
            "question": "Calculated Fields",
            "answer": ["Calculated Fields"]
        },
        {
            "question": "Formatting",
            "answer": ["Formatting"]
        },
        {
            "question": "Analytics in Tableau",
            "answer": ["Forecasting in Tableau",
                " Analytics in Tableau"]
        },
        {
            "question": "Dashboarding",
            "answer": ["Dashboarding"]
        },
        {
            "question": "Live Project!!",
            "answer": ["Live Project!!"]
        },
        {
            question: "Final Assignment",
            answer: [
                "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of   80% and above guarantees an internship opportunity from Zep or their partner companies"

            ],
        },

    ];




    return (
        <div className="bg-white">
            <div className="mx-auto w-full px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="mx-auto sm:w-2/3 w-full  divide-y divide-gray-900/10 ">
                    <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900 my-4">Course curriculum</h2>

                    <div className='flex flex-col justify-between items-start sm:flex-row gap-12 '>
                        <div className='sm:w-1/2 w-full'>
                            <h1 className=' text-xl my-6 '>Microsoft Power BI: A Complete Guide [2022 Edition]</h1>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq, index) => (
                                    <Disclosure as="div" key={index} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="flex w-full items-start justify-between text-left text-gray-900 my-2 mx-4">
                                                    <div className=''>

                                                        <p className="text-base leading-7 text-gray-600 " >{faq.answer.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                        </p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}

                            </dl>
                        </div>
                        <div className='sm:w-1/2 w-full'>
                            <h1 className=' text-xl my-6 '>Tableau A-Z: An End to End Guide</h1>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs2.map((faq, index) => (
                                    <Disclosure as="div" key={index} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="flex w-full items-start justify-between text-left text-gray-900 my-2 mx-4">
                                                    <div className=''>

                                                        <p className="text-base leading-7 text-gray-600 " >{faq.answer.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                        </p>
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}

                            </dl>
                        </div>
                    </div>


                </div>
                <p className='mt-16'><b>Note:</b> The internships are not guaranteed to be paid, but it helps a lot to gain industry level knowledge.</p>
            </div>
        </div>
    )
}
