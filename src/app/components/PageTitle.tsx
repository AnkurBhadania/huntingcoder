"use client";
import * as React from 'react'

interface PageTitleProps {
    title?: string;
    subtitle?: string;
  }

export default function PageTitle(props: PageTitleProps) {
    return (
        <>
           <div className="mx-auto max-w-2xl lg:mx-0">
                
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {props.title ?? "Hunting Coder"}
                </h2>
                
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    {props.subtitle ?? "A blog for hunting coders by a hunting coder"}
                </p>
            </div>
        </>
    );
}
