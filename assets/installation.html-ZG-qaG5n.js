import{_ as e,c as a,o as t,d as n}from"./app-DFjglKIV.js";const s={},o=n(`<h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h1><h2 id="install-the-package" tabindex="-1"><a class="header-anchor" href="#install-the-package"><span>Install the package</span></a></h2><p>All you need to do to get started is add <code>Deploy Operations</code> to your <a href="https://getcomposer.org" target="_blank" rel="noopener noreferrer">composer</a> dependencies:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">composer</span> require dragon-code/laravel-deploy-operations</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If necessary, you can publish the configuration file by calling the console command: В случае необходимости</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>config <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;DragonCode\\LaravelDeployOperations\\ServiceProvider&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="publish-the-operation-stub-optional" tabindex="-1"><a class="header-anchor" href="#publish-the-operation-stub-optional"><span>Publish the operation stub (optional)</span></a></h2><p>You may publish the stub used by the <code>make:operation</code> command and/or <a href="https://laravel-idea.com" target="_blank" rel="noopener noreferrer">Laravel Idea</a> plugin for <a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer">JetBrains PhpStorm</a> if you want to modify it.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan vendor:publish <span class="token parameter variable">--tag</span><span class="token operator">=</span>stubs <span class="token parameter variable">--provider</span><span class="token operator">=</span><span class="token string">&quot;DragonCode\\LaravelDeployOperations\\ServiceProvider&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>As a result, the file <code>stubs/deploy-operation.stub</code> will be created in the root of the project, which you can change for yourself.</p>`,10),r=[o];function i(l,p){return t(),a("div",null,r)}const c=e(s,[["render",i],["__file","installation.html.vue"]]),h=JSON.parse('{"path":"/getting-started/installation.html","title":"Installation","lang":"en-US","frontmatter":{"description":"Installation Install the package All you need to do to get started is add Deploy Operations to your composer dependencies: If necessary, you can publish the configuration file b...","head":[["meta",{"property":"og:url","content":"https://deploy-operations.dragon-code.pro/getting-started/installation.html"}],["meta",{"property":"og:site_name","content":"Laravel Deploy Operations"}],["meta",{"property":"og:title","content":"Installation"}],["meta",{"property":"og:description","content":"Installation Install the package All you need to do to get started is add Deploy Operations to your composer dependencies: If necessary, you can publish the configuration file b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-22T20:24:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-22T20:24:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Installation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-22T20:24:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install the package","slug":"install-the-package","link":"#install-the-package","children":[]},{"level":2,"title":"Publish the operation stub (optional)","slug":"publish-the-operation-stub-optional","link":"#publish-the-operation-stub-optional","children":[]}],"git":{"updatedTime":1716409491000},"autoDesc":true,"filePathRelative":"getting-started/installation.md"}');export{c as comp,h as data};