import { DocsCard, HelloNearCard } from '@/components/cards';
import styles from '../app.module.css'
import { NetworkId, ComponentMap } from '@/config';
import dynamic from 'next/dynamic';

const Component = dynamic(() => import('../../components/vm-component'), { ssr: false });
// import {Component} from '@/components/vm-component';
const socialComponents = ComponentMap[NetworkId];

export default function HelloComponents() {

  return (
    <>

    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Loading components from: &nbsp;
          <code className={styles.code}>{socialComponents.socialDB}</code>
        </p>
      </div>
      <div className={styles.center}>
        <h1> <code>Multi-chain</code> Components Made Simple </h1>
      </div>

      <div className={styles.grid}>
        <Component src={socialComponents.HelloNear} />
        <Component src={socialComponents.Lido} />
      </div>

      <hr />

      <div className={styles.grid}>
        <DocsCard />
        <HelloNearCard />
      </div>
    </main>
    </>
  );
}