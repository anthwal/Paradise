import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import {ButtonLink} from "@/components/button";

export default function NotFound() {
    return (
        <section className="py-18 lg:py-32">
            <Container>
                <div className="text-steel">
                    <Eyebrow>404</Eyebrow>
                </div>
                <h1 className="mt-4 font-display font-stretch-87% text-h2">Page not found</h1>
                <p className="mt-4 max-w-prose text-body-l text-steel">
                    The page you are looking for does not exist or has moved.
                </p>
                <div className="mt-8">
                    <ButtonLink href="/">Back to home</ButtonLink>
                </div>
            </Container>
        </section>
    );
}