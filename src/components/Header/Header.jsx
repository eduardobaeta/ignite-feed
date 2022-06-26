import StyleHeader from './Header.module.css'

export function Header(){
    return(
        <header className={StyleHeader.header}>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      width="209"
      height="61"
      fill="none"
      viewBox="0 0 209 61"
    >
      <path
        fill="#00B37E"
        d="M64.067.41L48.388 55.955a.358.358 0 01-.585.151l-10.497-9.959 7.866-27.835c.08-.252-.159-.479-.425-.403L15.41 25.371 4.965 15.463c-.186-.177-.106-.48.16-.555L63.642.008c.265-.051.505.176.425.403z"
        opacity="0.5"
      ></path>
      <path
        fill="#00B37E"
        d="M37.306 46.146l-4.04 14.371a.358.358 0 01-.584.151L.102 29.783c-.187-.177-.107-.48.159-.555l15.147-3.857 21.898 20.775z"
        opacity="0.5"
      ></path>
      <path
        fill="#00B37E"
        d="M45.171 18.311l-7.866 27.835L15.408 25.37l29.338-7.463c.266-.076.505.15.425.403z"
      ></path>
      <path
        fill="#E1E1E6"
        d="M85.683 20.693v18.19h-3.736v-18.19h3.736zm11.843 4.672h3.26v13.068c0 1.232-.274 2.277-.824 3.135-.541.866-1.3 1.52-2.274 1.962-.974.45-2.107.674-3.398.674a7.815 7.815 0 01-1.799-.225 7.195 7.195 0 01-1.799-.7 4.754 4.754 0 01-1.424-1.199l1.587-2.123c.416.483.9.858 1.449 1.124a4.02 4.02 0 001.824.412c.65 0 1.2-.12 1.649-.362.45-.233.795-.579 1.037-1.037.241-.45.362-.995.362-1.636v-9.97l.35-3.123zm-9.095 6.921v-.262c0-1.033.125-1.97.375-2.811.258-.85.62-1.578 1.087-2.186a4.942 4.942 0 011.724-1.412c.674-.333 1.436-.5 2.286-.5.9 0 1.653.167 2.261.5a4.088 4.088 0 011.5 1.424c.39.608.695 1.328.911 2.161.225.825.4 1.729.525 2.711v.575a16.018 16.018 0 01-.562 2.623 8.06 8.06 0 01-.987 2.124 4.365 4.365 0 01-1.524 1.4c-.6.333-1.316.5-2.149.5s-1.587-.172-2.261-.513a5.052 5.052 0 01-1.712-1.437c-.475-.616-.84-1.34-1.1-2.173a9.44 9.44 0 01-.374-2.724zm3.598-.262v.262c0 .558.054 1.079.162 1.562.109.483.275.912.5 1.287.233.366.52.653.862.861.35.2.762.3 1.237.3.658 0 1.195-.137 1.611-.412a2.59 2.59 0 00.938-1.162c.208-.491.329-1.058.362-1.699v-1.636a5.529 5.529 0 00-.213-1.412 3.386 3.386 0 00-.524-1.087 2.268 2.268 0 00-.875-.7c-.358-.166-.783-.25-1.274-.25-.475 0-.887.109-1.237.325a2.663 2.663 0 00-.862.862c-.225.367-.395.8-.512 1.3a6.918 6.918 0 00-.175 1.599zm15.079-3.773v10.631h-3.598V25.365h3.373l.225 2.886zm-.525 3.398h-.974c0-1 .129-1.899.387-2.698.258-.808.62-1.495 1.087-2.062a4.667 4.667 0 011.661-1.312c.65-.308 1.375-.462 2.174-.462.633 0 1.212.092 1.737.275a3.33 3.33 0 011.349.875c.383.4.675.928.874 1.586.209.658.313 1.462.313 2.411v8.62h-3.623V30.25c0-.6-.083-1.066-.25-1.4a1.403 1.403 0 00-.737-.699c-.317-.142-.708-.212-1.174-.212-.484 0-.904.095-1.262.287-.35.192-.642.458-.875.8a3.778 3.778 0 00-.512 1.174 5.74 5.74 0 00-.175 1.449zm15.141-6.284v13.517h-3.61V25.365h3.61zm-3.835-3.523c0-.525.183-.958.55-1.3.366-.34.858-.511 1.474-.511.608 0 1.095.17 1.462.512.374.341.562.774.562 1.3 0 .524-.188.957-.562 1.298-.367.342-.854.513-1.462.513-.616 0-1.108-.171-1.474-.513-.367-.341-.55-.774-.55-1.299zm13.43 3.523v2.549h-7.87v-2.549h7.87zm-5.922-3.335h3.598v12.78c0 .391.05.69.15.9a.904.904 0 00.475.436c.208.075.471.113.787.113.225 0 .425-.008.6-.025.183-.025.337-.05.462-.075l.012 2.648c-.308.1-.641.18-.999.238a7.415 7.415 0 01-1.187.087c-.791 0-1.482-.129-2.074-.387a2.858 2.858 0 01-1.349-1.274c-.316-.583-.475-1.35-.475-2.3V22.03zm14.192 17.102c-1.049 0-1.99-.166-2.823-.5a6.198 6.198 0 01-2.124-1.411 6.265 6.265 0 01-1.324-2.086 7.028 7.028 0 01-.462-2.55v-.499c0-1.024.145-1.961.437-2.81a6.607 6.607 0 011.249-2.212 5.489 5.489 0 011.999-1.437c.783-.341 1.666-.512 2.648-.512.958 0 1.808.158 2.549.475a4.989 4.989 0 011.861 1.35c.508.582.892 1.282 1.15 2.098.258.808.387 1.707.387 2.698v1.5h-10.744v-2.4h7.209v-.274c0-.5-.092-.945-.275-1.337a2.124 2.124 0 00-.8-.95c-.358-.232-.816-.349-1.374-.349-.475 0-.883.104-1.224.312-.342.209-.621.5-.837.875a4.726 4.726 0 00-.475 1.324c-.1.5-.15 1.05-.15 1.65v.499c0 .541.075 1.041.225 1.5.158.457.379.853.662 1.186.292.333.641.591 1.049.774.417.184.887.275 1.412.275.65 0 1.254-.125 1.812-.374a3.922 3.922 0 001.461-1.162l1.749 1.899c-.283.408-.67.8-1.162 1.174-.483.375-1.066.683-1.749.924-.683.234-1.461.35-2.336.35zm17.94-18.44v18.19h-3.748v-18.19h3.748zm7.246 7.771v2.924h-8.27v-2.924h8.27zm.874-7.77v2.936h-9.144v-2.936h9.144zm7.896 18.44c-1.05 0-1.991-.167-2.824-.5a6.204 6.204 0 01-2.123-1.412 6.284 6.284 0 01-1.325-2.086 7.028 7.028 0 01-.462-2.55v-.499c0-1.024.146-1.961.437-2.81a6.61 6.61 0 011.25-2.212 5.48 5.48 0 011.999-1.437c.782-.341 1.665-.512 2.648-.512.958 0 1.807.158 2.549.475a4.997 4.997 0 011.861 1.35c.508.582.891 1.282 1.149 2.098.258.808.388 1.707.388 2.698v1.5h-10.744v-2.4h7.208v-.274c0-.5-.091-.945-.275-1.337a2.122 2.122 0 00-.799-.95c-.358-.232-.816-.349-1.374-.349-.475 0-.883.104-1.225.312-.341.209-.62.5-.837.875a4.79 4.79 0 00-.475 1.324 8.5 8.5 0 00-.149 1.65v.499c0 .541.075 1.041.224 1.5.159.457.379.853.663 1.186.291.333.641.591 1.049.774.416.184.887.275 1.412.275.649 0 1.253-.125 1.811-.374a3.925 3.925 0 001.462-1.162l1.749 1.899c-.283.408-.671.8-1.162 1.174-.483.375-1.066.683-1.749.924-.683.234-1.462.35-2.336.35zm13.817 0c-1.05 0-1.991-.167-2.824-.5a6.204 6.204 0 01-2.123-1.412 6.284 6.284 0 01-1.325-2.086 7.028 7.028 0 01-.462-2.55v-.499c0-1.024.146-1.961.437-2.81a6.61 6.61 0 011.25-2.212 5.48 5.48 0 011.999-1.437c.782-.341 1.665-.512 2.648-.512.958 0 1.807.158 2.549.475a4.997 4.997 0 011.861 1.35c.508.582.891 1.282 1.149 2.098.259.808.388 1.707.388 2.698v1.5h-10.744v-2.4h7.208v-.274c0-.5-.091-.945-.275-1.337a2.122 2.122 0 00-.799-.95c-.358-.232-.816-.349-1.374-.349-.475 0-.883.104-1.225.312-.341.209-.62.5-.837.875a4.757 4.757 0 00-.474 1.324c-.1.5-.15 1.05-.15 1.65v.499c0 .541.075 1.041.225 1.5.158.457.378.853.662 1.186.291.333.641.591 1.049.774.416.184.887.275 1.412.275.649 0 1.253-.125 1.811-.374a3.918 3.918 0 001.462-1.162l1.749 1.899c-.283.408-.671.8-1.162 1.174-.483.375-1.066.683-1.749.924-.683.234-1.462.35-2.336.35zm15.578-3.199v-16.24h3.623v19.188h-3.26l-.363-2.948zm-8.545-3.648v-.262c0-1.033.117-1.97.35-2.811.233-.85.575-1.578 1.025-2.186a4.659 4.659 0 011.661-1.412c.658-.333 1.408-.5 2.249-.5.791 0 1.482.167 2.074.5a4.44 4.44 0 011.524 1.424c.424.608.766 1.328 1.024 2.161.258.825.446 1.729.562 2.711v.575a14.41 14.41 0 01-.562 2.623 7.875 7.875 0 01-1.024 2.124 4.525 4.525 0 01-1.524 1.4c-.6.333-1.3.5-2.099.5-.841 0-1.591-.172-2.249-.513a4.772 4.772 0 01-1.649-1.437c-.441-.616-.779-1.34-1.012-2.173a10.08 10.08 0 01-.35-2.724zm3.598-.262v.262c0 .558.042 1.079.125 1.562.092.483.238.912.437 1.287.209.366.475.653.8.861.333.2.737.3 1.212.3.616 0 1.124-.137 1.524-.412.4-.283.704-.67.912-1.162.216-.491.341-1.058.375-1.699v-1.636a5.89 5.89 0 00-.225-1.412 3.085 3.085 0 00-.525-1.087 2.318 2.318 0 00-.849-.7c-.334-.166-.729-.25-1.187-.25-.467 0-.866.109-1.2.325a2.388 2.388 0 00-.812.862c-.199.367-.349.8-.449 1.3a8.696 8.696 0 00-.138 1.599z"
      ></path>
    </svg>
        </header>
    )
}