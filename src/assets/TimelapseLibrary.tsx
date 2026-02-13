import Timelapse from '../components/Timelapse.tsx'

export type TimelapseData = {
    id: string;
    videoUrl: string;
    thumbnailUrl: string;
};

export const TimelapseLibrary: TimelapseData[] = [
    {
        id: "",
        videoUrl: "",
        thumbnailUrl: "",
    },
    {
        id: "forest fire knights",
        videoUrl: "https://www.youtube.com/watch?v=qQMJDrdIHKc",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlfxyji-6cafbf68-9ae7-4270-9e56-c9fc504aa00f.jpg/v1/fill/w_1192,h_670,q_70,strp/fire_and_knights_by_lavennielil_dlfxyji-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGZ4eWppLTZjYWZiZjY4LTlhZTctNDI3MC05ZTU2LWM5ZmM1MDRhYTAwZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vpSB9iqNTIuKgQF8rsgJhAKuv1AmJfeHTXWCk5rd_KY",
    },
    {
        id: "forest fire",
        videoUrl: "https://www.youtube.com/watch?v=e68BSE0gXf8",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlfoa5f-d340286d-b8b0-4989-a441-8195cf2ae26a.jpg/v1/fill/w_1192,h_670,q_70,strp/forest_fire_by_lavennielil_dlfoa5f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGZvYTVmLWQzNDAyODZkLWI4YjAtNDk4OS1hNDQxLTgxOTVjZjJhZTI2YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wmct5BSX3vASPVSARCdVOG2X9RReTSRsDK9B-t0oXM8",
    },
    {
        id: "kishiar after awakening",
        videoUrl: "https://www.youtube.com/watch?v=EcsfOQPYEpI",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dle4vka-1687cf00-31e3-409e-a071-03f2c127bcbc.jpg/v1/fill/w_1192,h_670,q_70,strp/kishiar_la_orr_after_awakening_by_lavennielil_dle4vka-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGU0dmthLTE2ODdjZjAwLTMxZTMtNDA5ZS1hMDcxLTAzZjJjMTI3YmNiYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lehN5kSVdyCfzw7_giZtI7QWVkNrrEuzZ13gRQnlMxc",
    },
    {
        id: "kishiar party",
        videoUrl: "https://www.youtube.com/watch?v=O-UlwWTJ2xM",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbvhqg-c0e27d2b-b431-45f8-862d-b4b2adef77b6.jpg/v1/fill/w_1192,h_670,q_70,strp/kishiar_la_orr_at_a_party_by_lavennielil_dlbvhqg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJ2aHFnLWMwZTI3ZDJiLWI0MzEtNDVmOC04NjJkLWI0YjJhZGVmNzdiNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tyBjAvDM0gKt7ChZyKCNYIhz1gw2D9_61ty2WL7F6K0",
    },
    {
        id: "girl reach out to golden rain",
        videoUrl: "https://www.youtube.com/watch?v=wotlNquj9SU",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbg3it-b24505b4-db82-40c5-bf79-ea683e144c4b.jpg/v1/fill/w_1192,h_670,q_70,strp/girl_reach_out_to_the_rain_by_lavennielil_dlbg3it-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJnM2l0LWIyNDUwNWI0LWRiODItNDBjNS1iZjc5LWVhNjgzZTE0NGM0Yi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.93MnTofdI-W-ncsWuy9_A_GztWdpBOYlabSH2Fsd9hI",
    },
    {
        id: "man black sea",
        videoUrl: "https://www.youtube.com/watch?v=Mv5LkdoFJXQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dl69nr1-0528666b-6243-44c2-bf57-6d6dffb3ff3d.jpg/v1/fill/w_1192,h_670,q_70,strp/man_black_sea_by_lavennielil_dl69nr1-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbDY5bnIxLTA1Mjg2NjZiLTYyNDMtNDRjMi1iZjU3LTZkNmRmZmIzZmYzZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ybbnILZkM8S8oCnBdY0S6RixC9sXe2D1Eh5GrUGX51s",
    },
    {
        id: "castorice",
        videoUrl: "https://www.youtube.com/watch?v=sFfocs95FR8",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dl5ojhj-02904a71-fb92-4f8d-b91c-64a08a8f5fa1.jpg/v1/fill/w_1192,h_670,q_70,strp/castorice_by_lavennielil_dl5ojhj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbDVvamhqLTAyOTA0YTcxLWZiOTItNGY4ZC1iOTFjLTY0YTA4YThmNWZhMS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iNVCtDooYqwaWKTRQQ1m6VLQ6YHi23HETe9axdQtqxY",
    },
    {
        id: "lonely playground in the evening",
        videoUrl: "https://www.youtube.com/watch?v=mBhHmw7lzSQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dl4ld4q-c2ffd0ca-3dda-4720-a716-84dce90574f7.jpg/v1/fill/w_1192,h_670,q_70,strp/lonely_playground_in_the_evening_by_lavennielil_dl4ld4q-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbDRsZDRxLWMyZmZkMGNhLTNkZGEtNDcyMC1hNzE2LTg0ZGNlOTA1NzRmNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YRyCqtau9EWMOesYuMtcy4OSHPzBrc9RBZ6lylfYHG0",
    },
    {
        id: "in his final moments beside him",
        videoUrl: "https://www.youtube.com/watch?v=b__CqNO6cQQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dl47gus-739db144-073f-460b-861d-1a9dcfe109c8.jpg/v1/fill/w_1192,h_670,q_70,strp/in_his_final_moments_beside_him_by_lavennielil_dl47gus-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbDQ3Z3VzLTczOWRiMTQ0LTA3M2YtNDYwYi04NjFkLTFhOWRjZmUxMDljOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.iPWpzYMCMeaYR_zO3TzE2hy5k_jSSrcc_Fu1nD54eYE",
    },
    {
        id: "overworked woman resting",
        videoUrl: "https://www.youtube.com/watch?v=vhKsJdJaPlA",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4",
    },
    {
        id: "underground with a slime",
        videoUrl: "https://www.youtube.com/watch?v=6ov4O8LkjEQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY",
    },
    {
        id: "angel under the dazzling sun",
        videoUrl: "https://www.youtube.com/watch?v=shcIbxzG1NM",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dku195m-95df0e0d-8d3e-4f52-843b-3e50e53bac4f.jpg/v1/fill/w_1192,h_670,q_70,strp/angel_under_the_dazzling_sun_by_lavennielil_dku195m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3UxOTVtLTk1ZGYwZTBkLThkM2UtNGY1Mi04NDNiLTNlNTBlNTNiYWM0Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5nBaxF0nCf5UUxT2UtImybiGquC-g36xmtCc_c__4IA",
    },
    {
        id: "ice brachoisaurus sculpture",
        videoUrl: "https://www.youtube.com/watch?v=xYrkHqKbMRI",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dko9djs-2b5f584a-ca22-4184-851b-f56e6c3d006c.jpg/v1/fill/w_1192,h_670,q_70,strp/ice_brachiosaurus_sculpture_by_lavennielil_dko9djs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka285ZGpzLTJiNWY1ODRhLWNhMjItNDE4NC04NTFiLWY1NmU2YzNkMDA2Yy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.PyVb9akdsEoFY6cRMtTsmrg_F0c7rctPUdPQkhxixe8",
    },
    {
        id: "paradox cosmic ocean",
        videoUrl: "https://www.youtube.com/watch?v=k7D4C7SYFO4",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkldmlv-461a25c8-4431-4d86-8bd0-b16826c7fa17.jpg/v1/fill/w_1192,h_670,q_70,strp/cosmic_ocean_by_lavennielil_dkldmlv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2xkbWx2LTQ2MWEyNWM4LTQ0MzEtNGQ4Ni04YmQwLWIxNjgyNmM3ZmExNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cYHIJtvCsX1wfcqNA4GAJ-xBarZ5ILfXNOOxrMckUcs",
    },
    {
        id: "city at night with puddles",
        videoUrl: "https://www.youtube.com/watch?v=FieecdQ8Apg",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkju9i5-654b22b5-c1bd-43ba-938d-32fb63ae1cf2.jpg/v1/fill/w_1192,h_670,q_70,strp/night_city_by_lavennielil_dkju9i5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2p1OWk1LTY1NGIyMmI1LWMxYmQtNDNiYS05MzhkLTMyZmI2M2FlMWNmMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.taYGxYchHY43AvCCkA3VSqjijOMJQa0SCpGT38trurg",
    },
    {
        id: "junhee supernova",
        videoUrl: "https://www.youtube.com/watch?v=W3jWN_nY2yg",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh91tn-90a38052-f99e-4de1-8798-08280a00f208.jpg/v1/fill/w_1192,h_670,q_70,strp/junhee_dancing_in_supernova_by_lavennielil_dkh91tn-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MXRuLTkwYTM4MDUyLWY5OWUtNGRlMS04Nzk4LTA4MjgwYTAwZjIwOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CZSkc2f0IEO7XLumn4GSY07yGO1BVbWAAGDVfpRg9lg",
    },
    {
        id: "banner hold that hand",
        videoUrl: "https://www.youtube.com/watch?v=0zao0b_1sgs",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh918f-d03dd3c6-5842-4d53-a6d9-45d64fdc61e2.jpg/v1/fill/w_1192,h_670,q_70,strp/hold_that_hand_by_lavennielil_dkh918f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MThmLWQwM2RkM2M2LTU4NDItNGQ1My1hNmQ5LTQ1ZDY0ZmRjNjFlMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5Zgar650ck-bovVeZ9ie_3z67MdlDDeRr79yDZHlJe0",
    },
    {
        id: "flower forest waterfall",
        videoUrl: "https://www.youtube.com/watch?v=AujmLoy4-YU",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh913r-c67f2b5b-ea80-4a2d-bc2e-75693fe5de53.jpg/v1/fill/w_1192,h_670,q_70,strp/flower_forest_by_lavennielil_dkh913r-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MTNyLWM2N2YyYjViLWVhODAtNGEyZC1iYzJlLTc1NjkzZmU1ZGU1My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wKPRkDQvLHQeUGPEYMPgHWBaY3x1Ajrp7SpWiR4PpTo",
    },
    {
        id: "driting through music",
        videoUrl: "https://www.youtube.com/watch?v=h_aXWR_6-qY",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh90q3-a7105e5e-29c9-46e3-a45a-a0a41ba8f50c.jpg/v1/fill/w_1192,h_670,q_70,strp/listening_to_music_by_lavennielil_dkh90q3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MHEzLWE3MTA1ZTVlLTI5YzktNDZlMy1hNDVhLWEwYTQxYmE4ZjUwYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.80vNG8jcPEkSlwbvnw1jf2WOaxq0vS3JweOigLA385U",
    },
    {
        id: "huntress eva",
        videoUrl: "https://www.youtube.com/watch?v=bMebYKGioxs",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh90fy-0edf9d7c-1196-472f-8853-c1dee1f80514.jpg/v1/fill/w_1192,h_670,q_70,strp/eva_by_lavennielil_dkh90fy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MGZ5LTBlZGY5ZDdjLTExOTYtNDcyZi04ODUzLWMxZGVlMWY4MDUxNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Na1sGdJ0mod7D14xmfBew4zmTOsnpAiqseZ8gHHZkEs",
    },
    {
        id: "frozen angel praying",
        videoUrl: "https://www.youtube.com/watch?v=qxchELAMDtw",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh9040-d3e79bbc-cc28-411d-b868-d8b886321202.jpg/v1/fill/w_1192,h_670,q_70,strp/frozen_angel_by_lavennielil_dkh9040-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g5MDQwLWQzZTc5YmJjLWNjMjgtNDExZC1iODY4LWQ4Yjg4NjMyMTIwMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3JGHQoM91s72pATL6Ks75xSM9KgDg9QzXZRHsVvzlO0",
    },
    {
        id: "villain unsheathing sword",
        videoUrl: "https://www.youtube.com/watch?v=L7WsVLJD_Bc",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8zvw-9e2a4443-23fe-4ba1-a725-bf0719451328.jpg/v1/fill/w_1192,h_670,q_70,strp/unsheathing_a_sword_by_lavennielil_dkh8zvw-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4enZ3LTllMmE0NDQzLTIzZmUtNGJhMS1hNzI1LWJmMDcxOTQ1MTMyOC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uebOqK-AOCRYdb7bSX7mp1aT7YDfY4KA9JefSMNsf4I",
    },
    {
        id: "universal eyes with galaxies",
        videoUrl: "https://www.youtube.com/watch?v=J0JY2qXGJqQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8zml-153dc408-140a-4870-956b-6777a1465b02.jpg/v1/fill/w_1192,h_670,q_70,strp/watching_over_the_universe_by_lavennielil_dkh8zml-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4em1sLTE1M2RjNDA4LTE0MGEtNDg3MC05NTZiLTY3NzdhMTQ2NWIwMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wrgQZaLVpgAWzI-jXPNchTWxfEA990l8L2v19d9pthg",
    },
    {
        id: "falling into black hole eye",
        videoUrl: "https://www.youtube.com/watch?v=aWvZyRfZqcY",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8z9c-7ace8aea-6e80-435f-9b79-caa5388de3a9.jpg/v1/fill/w_1192,h_670,q_70,strp/a_dream__girl_falling_into_universe_eye_by_lavennielil_dkh8z9c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4ejljLTdhY2U4YWVhLTZlODAtNDM1Zi05Yjc5LWNhYTUzODhkZTNhOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1G1M3iWDB7I0fXz3pgiLZivR1kzs5ywl4n65K33ujdo",
    },
    {
        id: "ice mage frozen world",
        videoUrl: "https://www.youtube.com/watch?v=T8lPGvTfkto",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8z1f-46ccd666-eded-4c54-90b3-0174823ab5aa.jpg/v1/fill/w_1192,h_670,q_70,strp/ice_mage_by_lavennielil_dkh8z1f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4ejFmLTQ2Y2NkNjY2LWVkZWQtNGM1NC05MGIzLTAxNzQ4MjNhYjVhYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oQWQhEdGBIsifGrMioDuzJKfiYwRqUyCR2Ezej_xwZA",
    },
    {
        id: "queen outside looking up",
        videoUrl: "https://www.youtube.com/watch?v=XiSAJbkThRA",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8ytb-7c3908d5-f785-4dd7-aa9b-1a99ed7ec6ff.jpg/v1/fill/w_1192,h_670,q_70,strp/queen_on_a_walk_by_lavennielil_dkh8ytb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4eXRiLTdjMzkwOGQ1LWY3ODUtNGRkNy1hYTliLTFhOTllZDdlYzZmZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6MlbwYhggfaLfD3c3-T8WP2Gv0WJtGcxzF6twWp3ppQ",
    },
    {
        id: "horizonbound",
        videoUrl: "https://www.youtube.com/watch?v=-PEvwpoZ6ak",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8ykx-726ddaaa-1aa7-4cab-87a6-c913af25627d.jpg/v1/fill/w_1192,h_670,q_70,strp/black_hole_by_lavennielil_dkh8ykx-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4eWt4LTcyNmRkYWFhLTFhYTctNGNhYi04N2E2LWM5MTNhZjI1NjI3ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2o57unkmuMW_1Gr3rGQPJJLrRNtG2gYUFk05N-lX_xk",
    },
    {
        id: "knight saying goodbye to family",
        videoUrl: "https://www.youtube.com/watch?v=a078E1jx6G4",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8yc0-28a0a1ea-8bc3-4f07-95b7-0d2e7a89e607.jpg/v1/fill/w_1192,h_670,q_70,strp/knight_saying_goodbye_by_lavennielil_dkh8yc0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4eWMwLTI4YTBhMWVhLThiYzMtNGYwNy05NWI3LTBkMmU3YTg5ZTYwNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.BusTiV84Yq829kM2lwwHhVwyoTAGVOUZAvWFnlZDfCo",
    },
    {
        id: "aikido lifetime",
        videoUrl: "https://www.youtube.com/watch?v=hGhJd-NGQsQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8y66-7517da91-c6ca-43e8-9bf4-9df9b99e4488.jpg/v1/fill/w_1192,h_670,q_70,strp/aikido_by_lavennielil_dkh8y66-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4eTY2LTc1MTdkYTkxLWM2Y2EtNDNlOC05YmY0LTlkZjliOTllNDQ4OC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MiZAv8sLzgsuM7RTpylwoSuVn377GeZQTan2_lkcXgo",
    },
    {
        id: "reach under the bed",
        videoUrl: "https://www.youtube.com/watch?v=HOatXvqcSO0",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8xz2-b146fe67-0ce0-42c5-96c1-78c991ee32c6.jpg/v1/fill/w_1192,h_670,q_70,strp/under_the_bed_by_lavennielil_dkh8xz2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4eHoyLWIxNDZmZTY3LTBjZTAtNDJjNS05NmMxLTc4Yzk5MWVlMzJjNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.WTvyNGDkGIwOPEqThkhJ6sa7kCHQ83_NEzcsHqtnJBI",
    },
    {
        id: "karate woman gojushiho sho",
        videoUrl: "https://www.youtube.com/watch?v=cDgN4JmeNQo",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8xr1-07ed84b4-eaf9-4783-8f65-eda5c48c9791.jpg/v1/fill/w_894,h_894,q_70,strp/karate_by_lavennielil_dkh8xr1-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiIvZi85MDJmYzQ1Yy1kZWVmLTRmMGItYjJhYy04ZTk5MzE4ZTlhYzcvZGtoOHhyMS0wN2VkODRiNC1lYWY5LTQ3ODMtOGY2NS1lZGE1YzQ4Yzk3OTEuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zXHOChjEowtRV2Mz7Ot-1jWYJhV6Wx-DKnT2dYh-lGI",
    },
    {
        id: "new year figure skater",
        videoUrl: "https://www.youtube.com/watch?v=WaSrUhaYnGQ",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8xdb-c6d2087d-91d8-4d43-a205-486e975e2918.jpg/v1/fill/w_894,h_894,q_70,strp/new_year_figure_skater_by_lavennielil_dkh8xdb-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiIvZi85MDJmYzQ1Yy1kZWVmLTRmMGItYjJhYy04ZTk5MzE4ZTlhYzcvZGtoOHhkYi1jNmQyMDg3ZC05MWQ4LTRkNDMtYTIwNS00ODZlOTc1ZTI5MTguanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tp9qRYrbeDxKDjgH25xo7y-9BCVJf2yH7FTjYAq9l3Y",
    },
    {
        id: "portrait purple short hair",
        videoUrl: "https://www.youtube.com/watch?v=3LHurFymLB8",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8x89-32220b04-a74b-4b75-a477-e3b0e6e0faaa.jpg/v1/fill/w_894,h_894,q_70,strp/portrait_by_lavennielil_dkh8x89-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiIvZi85MDJmYzQ1Yy1kZWVmLTRmMGItYjJhYy04ZTk5MzE4ZTlhYzcvZGtoOHg4OS0zMjIyMGIwNC1hNzRiLTRiNzUtYTQ3Ny1lM2IwZTZlMGZhYWEuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RQ_BnXHk_bFYR7Qwl5xGNiPes8e2_HyUn-OElph0334",
    },
    {
        id: "acrobat talisman mage",
        videoUrl: "https://www.youtube.com/watch?v=fgVpM2HDbJo",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8wvq-23031eef-f3b7-4f18-953c-6bf412ecd8d4.jpg/v1/fill/w_831,h_962,q_70,strp/talisman_mage_by_lavennielil_dkh8wvq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1MCIsInBhdGgiOiIvZi85MDJmYzQ1Yy1kZWVmLTRmMGItYjJhYy04ZTk5MzE4ZTlhYzcvZGtoOHd2cS0yMzAzMWVlZi1mM2I3LTRmMTgtOTUzYy02YmY0MTJlY2Q4ZDQuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RnwMLuqBpg-92VfuWgZZpBQ7LIPv7WxPON1mXOa-66Y",
    },
    {
        id: "train station returning home",
        videoUrl: "https://www.youtube.com/watch?v=R3spF_-zFV4",
        thumbnailUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkh8vfm-be65d5ce-b195-476c-a904-ed24f0033e84.jpg/v1/fill/w_1192,h_670,q_70,strp/train_station_by_lavennielil_dkh8vfm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka2g4dmZtLWJlNjVkNWNlLWIxOTUtNDc2Yy1hOTA0LWVkMjRmMDAzM2U4NC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wKog2CV82nkG8t7KvZlwlMIW23VyRLjkTl-m5ZDCMaQ",
    },
];

export function TimelapseById(id: string) {
    const data = TimelapseLibrary.find((item) => item.id === id.id);

    if (!data) {
        console.warn(`Timelapse with id "${id}" not found`);
        return null;
    }

    return <Timelapse videoUrl={data.videoUrl} thumbnailUrl={data.thumbnailUrl} />;
}

export function getTimelapseUrlById(id: string) {
    return TimelapseLibrary.find((item) => item.id === id)?.videoUrl;
}
export function getTimelapseImageById(id: string) {
    return TimelapseLibrary.find((item) => item.id === id)?.thumbnailUrl;
}