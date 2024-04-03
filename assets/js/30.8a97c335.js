(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{386:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Sometimes is easier to write some Ruby to tackle a problem, but may result in a performance hit.  For example, looping through a set of ActiveRecord objects and doing some processing on each object, or even performing an SQL query on every iteration to obtain the desired results.  I came across some code recently that was doing just this.")]),s._v(" "),a("p",[s._v("It involved three models with a grandparent > parent > grandchild relationship with your typical 1:M parent to child associations.  The grandchild entity included a foreign key status_id which corresponds to a particular status, for example 'Pending', 'Reviewing', or 'Approved'.  The goal was to determine whether or not the grandparent had any grandchildren that were in any of these states, so the end result would be this desired hash for each grand_parent:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":grand_parent_id")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":has_pending_grandchildren")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":has_reviewing_grandchildren")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":has_approved_grandchildren")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ...")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("The purpose of returning this format was to be able to apply some frontend filtering at the grandparent level based on the status of the grandchildren.  The original code was doing something along these lines:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ['Pending','Reviewing', 'Approved', ...]")]),s._v("\nstatuses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pluck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nresults "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GrandParent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n  hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":grand_parent_id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  statuses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    status_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GrandChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_by_sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v('"\n      '),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" gc_count\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" grand_children gc\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JOIN")]),s._v(" parents p on p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent_id\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JOIN")]),s._v(" grand_parents gp on gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grand_parent_id\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JOIN")]),s._v(" statuses s on s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_id\n      "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#{gp.id} AND s.title = #{status}")]),s._v('\n    "'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("first\n    hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"has_'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downcase"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('_grandchildren"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_sym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" status_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("present"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" status_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gc_count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  results "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" hash\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])])]),a("p",[s._v("For a small number of records, this would not be an issue, but when you start to look at a 100 grandparent records and thousands of grandchildren, then the performance hit is noticeable.  My goal was to bring the logic into a single SQL query to eliminate overhead.  I started with a pure SQL statement given a couple status types and used case statements to return 1 or 0 based on the count of a particular status.  The syntax is based on using Oracle, but I imagine would be similar across other RDBMS systems.")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n  gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id grand_parent_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Pending'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" has_pending_grandchildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Reviewing'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" has_reviewing_grandchildren"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Approved'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ELSE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" has_approved_grandchildren\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" grand_parents gp\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" parents p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grand_parent_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" grand_children gc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEFT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("JOIN")]),s._v(" statuses s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" gc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("status_id\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" gp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n")])])]),a("p",[s._v("As you can see, there is a pattern for determining the whether or not any of the grandchildren are of a particular status.  It takes the sum of a particular status and returns 0 if the sum is null or zero, otherwise returns one.  The null portion is required in case there are no children since we are still doing a left join.  I was now able to build the query using ruby, since status is table drive, we will want to cover all statuses possible.  Here's the final solution I came up with:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("statuses "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pluck"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[s._v(":title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT "')]),s._v("\nstatuses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n  sql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CASE "')]),s._v("\n  sql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"sum(CASE s.title WHEN '"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v("' THEN 1 ELSE 0 END) \"")]),s._v("\n  sql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WHEN 0 THEN 0 WHEN NULL THEN 0 ELSE 1 END has_'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("#{")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("downcase"),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[s._v("}")])]),s._v('_grandchildren, "')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gp.id grand_parent_id "')]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FROM grand_parents gp "')]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LEFT JOIN parents p on p.grand_parent_id = gp.id "')]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LEFT JOIN grand_children gc on gc.parent_id = p.id "')]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LEFT JOIN statuses s on s.id = gs.status_id "')]),s._v("\nsql "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GROUP BY gp.id"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# We still need to loop thorugh to set boolean values")]),s._v("\nresults "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GrandParent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("find_by_sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n  hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attributes\n  hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("each")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("next")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grand_parent_id"')]),s._v("\n    hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  results "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" hash\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])])]),a("p",[s._v("And that's that! In my case I was able to change the load time from about 6s to under a second.  "),a("strong",[s._v("Important")]),s._v(" - this is prone to SQL injection, so status must be sanitized appropriately.")])])}),[],!1,null,null,null);t.default=e.exports}}]);