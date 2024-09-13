import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Interactive Learning",
    Svg: require("@site/static/img/undraw_learning.svg").default,
    description: (
      <>
        This book is built to give you a hands-on experience. You'll explore
        Signals and Systems not just through theory, but by experimenting with
        real code and concepts.
      </>
    ),
  },
  {
    title: "Focus on Practical Understanding",
    Svg: require("@site/static/img/undraw_focus.svg").default,
    description: (
      <>
        We believe in understanding over memorization. This book breaks down the
        concepts in a way that makes sense, letting you focus on truly grasping
        how things work.
      </>
    ),
  },
  {
    title: "Powered by Python",
    Svg: require("@site/static/img/undraw_python.svg").default,
    description: (
      <>
        Every concept is backed by Python code, allowing you to experiment and
        solidify your knowledge. You'll not only learn the theory but also how
        to apply it practically with Python.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
