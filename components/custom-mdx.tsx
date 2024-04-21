import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import prettycode from 'rehype-pretty-code';

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...(props.components || {}) }}
      options={{ mdxOptions: { rehypePlugins: [prettycode] } }}
    />
  );
}
