(function() {var implementors = {};
implementors["littlefs2"] = [{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl&lt;Storage&gt; Unpin for Allocation&lt;Storage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Storage as Storage&gt;::CACHE_SIZE as ArrayLength&lt;u8&gt;&gt;::ArrayType: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Storage as Storage&gt;::LOOKAHEADWORDS_SIZE as ArrayLength&lt;u32&gt;&gt;::ArrayType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Storage&gt; Unpin for Filesystem&lt;'a, Storage&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Metadata","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Attribute&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;S as Storage&gt;::ATTRBYTES_MAX as ArrayLength&lt;u8&gt;&gt;::ArrayType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for FileAllocation&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;S as Storage&gt;::CACHE_SIZE as ArrayLength&lt;u8&gt;&gt;::ArrayType: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; Unpin for File&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'a: 'b,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for OpenOptions","synthetic":true,"types":[]},{"text":"impl Unpin for DirEntry","synthetic":true,"types":[]},{"text":"impl Unpin for ReadDirAllocation","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b, S&gt; Unpin for ReadDir&lt;'a, 'b, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'a: 'b,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for FileType","synthetic":true,"types":[]},{"text":"impl Unpin for SeekFrom","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for Path","synthetic":true,"types":[]},{"text":"impl Unpin for PathBuf","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()