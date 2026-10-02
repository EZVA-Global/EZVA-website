import React, { useEffect } from 'react';
import MainLayout from '@/components/templates/MainLayout';
import NewsletterContent from '@/components/organisms/NewsletterContent.tsx';

const Newsletter: React.FC = () => {
    useEffect(() => {
        const previousTitle = document.title;
        const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        const previousDescription = description?.content;

        document.title = 'Business Growth Newsletter | EZVA Global';
        description?.setAttribute(
            'content',
            'Subscribe to the EZVA Business Growth Newsletter for practical insights on operations, automation, AI, remote staffing, and business systems.',
        );

        return () => {
            document.title = previousTitle;
            if (description && previousDescription) description.content = previousDescription;
        };
    }, []);

    return (
        <MainLayout>
            <NewsletterContent />
        </MainLayout>
    );
};

export default Newsletter;