Fake-Followers
==============

Chrome Extension to show percentage of Fake Followers, next to the follower count on a twitter profile.

Uses Twitteraudit.com for the analysis, thank you 	

Just load the folder as an unpacked extension in Chrome and see for yourself.

Extensions:
	- If an account hasn't been audited yet, it outputs a big UNDEFINED - correct. CAUGHT THIS, REPLACE WITH SAD FACE 
	- You need to authorise TwitterAudit to your twitter account (UPDATE, no you don't), and be logged in to both Twitter and Twitter Audit (UPDATE, actually I was totally wrong you don't) for it to work - correct with common token use/last token use.
	- No status representation when audit running - spinning wheel when the audit is loading. (UPDATE, loading screen 'zzz' added, would be better as spinning wheel)
	- In-page profile views -> "View Full Profile" does not load REAL percentage, as code is only run when Javascript load event fires currently. This process doesn't seem to initiate page load, not sure why.
